const express = require('express');

const db = require('../skater/skatermodel');

const server= express();
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({message: 'up to date'});
});

server.get("/skaters", (req, res) => {
    db.getAll()
      .then(skaters => {
        res.status(200).json(skaters);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  server.post('/skaters', (req, res) => {
    db.insert(req.body)
     .then(result => {
      res.status(201).json(result)
    })
    .catch(error => {
      res.status(500).json(error)
    });
  });

  server.delete('/skaters/:id/', async (req, res) => {
    const { id } = req.params
  
    try {
      const skater = await db.findById(id)
      if(skater) {
        const skater = await db.remove(id)
        res.status(200).json({message: 'success'})
      } else {
        res.status(404).json({ message: 'Id doesnt exist' })
      }
    } catch(err) {
      res.status(500).json({ message: 'Failed'})
    }
  })

module.exports = server;
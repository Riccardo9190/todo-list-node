const express = require('express');

const router = express.Router(); 

const Checklist = require('../models/checklist'); 

// Getting all checklists 
router.get('/', async (req, res) => {
  try {
    let checklists = await Checklist.find({});
    res.status(200).render('checklists/index', { checklists: checklists }); 
  } catch (error) {
    res.status(500).render('pages/error', { error: 'Erro ao exibir as checklists'});
  }
});

// Getting new checklist view
router.get('/new', async(req, res) => {
  try {                     
    let checklist = new Checklist(); 
    res.status(200).render('checklists/new', { checklist: checklist })
  } catch (error) {
    res.status(500).render('pages/error', { error: "Erro ao carregar o formulário" })
  }
});

// Getting checklist update view
router.get('/:id/edit' , async(req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).render('checklists/edit', { checklist: checklist });
  } catch (error) {
    res.status(500).render('pages/error', { error: 'Erro ao exibir a edição das checklists'});
  }
});

// Creating a new checklist 
router.post('/', async (req, res) => {
  let { name } = req.body.checklist; // Allowed by middleware (express.urlencoded({extended: true}))
                                     // and local variable 'checklist' in 'new.ejs' form 
  let checklist = new Checklist({name}); 
  
  try{
    await checklist.save(); 
    res.redirect('/checklists');
  } catch(error) {
    res.status(422).render('checklists/new', { checklists: { ...checklist, error}});
  }
});

// Find a checklist by id 
router.get('/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id).populate('tasks');
    res.status(200).render('checklists/show', { checklist: checklist }); 
  } catch (error) {
    res.status(500).render('pages/error', { error: 'Erro ao exibir as checklists'});
  }
});

// Update a checklist name by id
router.put('/:id', async (req, res) => {
  let { name } = req.body.checklist; 
  let checklist = await Checklist.findById(req.params.id);
  
  try {
    await checklist.updateOne({name});
    res.redirect('/checklists');
  } catch (error) {
    let errors = error.errors;
    res.status(422).render('checklists/edit', {checklist: {...checklist, errors}});
  }
});

// Delete a checklist by id
router.delete('/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findByIdAndRemove(req.params.id);
    res.redirect('/checklists');
  } catch (error) {
    res.status(500).render('pages/error', { error: 'Erro ao deletar a checklist'});
  }
});

module.exports = router; 


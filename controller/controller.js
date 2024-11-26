const Service = require('../models/Service');
const Member = require('../models/Member');
const Request = require('../models/Request');

const controller = {};

controller.getAllServices = async (req, res) => {
    try {
      const services = await Service.find();
      res.status(200).json(services);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  controller.getServiceByType = async (req, res) => {
    try {
      const service = await Service.findOne({ type: req.params.type });
      if (!service) {
        return res.status(404).json({ error: 'Service not found' });
      }
      res.status(200).json(service);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  controller.createRequest = async (req, res) => {
    try {
      const { mobile, email, amount, type, msg, code } = req.body;
      const newRequest = new Request({ mobile, email, amount, type, msg, code });
      await newRequest.save();
      res.status(201).json(newRequest);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  controller.registerMember = async (req, res) => {
    try {
      const { mobile, email, occupation, createpassword } = req.body;
      const newMember = new Member({ mobile, email, occupation, createpassword });
      await newMember.save();
      res.status(201).json(newMember);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  controller.updateRequest = async (req, res) => {
  try {
    const { mobile, type, remarks } = req.body;
    const updatedRequest = await Request.findOneAndUpdate(
      { mobile },
      { type, remarks },
      { new: true }
    );
    if (!updatedRequest) {
      return res.status(404).json({ error: 'Request not found' });
    }
    res.status(200).json(updatedRequest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

  controller.updatePassword = async (req, res) => {
    try {
      const { mobile, password } = req.body;
      const member = await Member.findOneAndUpdate(
        { mobile },
        { createpassword: password },
        { new: true }
      );
      if (!member) {
        return res.status(404).json({ error: 'Member not found' });
      }
      res.status(200).json(member);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  controller.calculateEMI = async (req, res) => {
    try {
      const { amt, tenure, type } = req.body;
      const emi = amt / tenure; 
      res.status(200).json({ emi, type });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  controller.deleteRequest = async (req, res) => {
    try {
      const { mobile } = req.body;
      const request = await Request.findOneAndDelete({ mobile });
      if (!request) {
        return res.status(404).json({ error: 'Request not found' });
      }
      res.status(200).json({ message: 'Request deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  controller.cancelMember = async (req, res) => {
    try {
      const { mobile } = req.body;
      const member = await Member.findOneAndDelete({ mobile });
      if (!member) {
        return res.status(404).json({ error: 'Member not found' });
      }
      res.status(200).json({ message: 'Member canceled' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  module.exports = controller;
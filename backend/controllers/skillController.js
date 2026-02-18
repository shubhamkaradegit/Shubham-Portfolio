import Skill from '../models/Skill.js';

// Get all skills
export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get skills by category
export const getSkillsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const skills = await Skill.findOne({ category });
    if (!skills) {
      return res.status(404).json({ message: 'Skills not found' });
    }
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create skills
export const createSkills = async (req, res) => {
  try {
    const newSkills = new Skill(req.body);
    const savedSkills = await newSkills.save();
    res.status(201).json(savedSkills);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update skills
export const updateSkills = async (req, res) => {
  try {
    const skills = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!skills) {
      return res.status(404).json({ message: 'Skills not found' });
    }
    res.status(200).json(skills);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete skills
export const deleteSkills = async (req, res) => {
  try {
    const skills = await Skill.findByIdAndDelete(req.params.id);
    if (!skills) {
      return res.status(404).json({ message: 'Skills not found' });
    }
    res.status(200).json({ message: 'Skills deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
    },
    githubLink: {
      type: String,
    },
    category: {
      type: String,
      enum: ['Major', 'Minor'],
      default: 'Minor',
    },
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;

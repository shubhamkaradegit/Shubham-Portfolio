import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ['Frontend', 'Backend', 'Database', 'Tools'],
    },
    skills: [
      {
        name: String,
        proficiency: {
          type: Number,
          min: 0,
          max: 100,
        },
        icon: String,
      },
    ],
  },
  { timestamps: true }
);

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;

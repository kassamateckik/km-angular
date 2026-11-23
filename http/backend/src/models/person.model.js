import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Person = sequelize.define(
  'Person',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'birth_date',
    },
  },
  {
    tableName: 'people',
    timestamps: false,
  }
);

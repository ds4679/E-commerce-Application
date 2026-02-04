/**
 * User Model
 * 
 * Purpose: Mongoose schema and model for User entity
 * Responsibilities:
 * - Define user schema with fields (name, email, password, role, etc.)
 * - Set up validation rules for user fields
 * - Define indexes for performance
 * - Export User model for use in controllers
 */

const mongoose = require('mongoose');

// User schema definition

module.exports = mongoose.model('User', {});

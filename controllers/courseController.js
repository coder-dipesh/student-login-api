const Course = require("../models/Course");

const getCourse = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      success: true,
      message: "Courses fetched successfully",
      data: courses,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const createCourse = async (req, res) => {
  const newCourse = new Course(req.body);
  try {
    const savedCourse = await newCourse.save();
    res.status(200).json({
      success: true,
      message: "Course created successfully",
      data: savedCourse,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const updateCourse = async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: updatedCourse,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = {
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};

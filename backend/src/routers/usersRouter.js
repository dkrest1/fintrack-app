const express = require("express")
const router = new express.Router
const { protect } = require("../middlewares/authMiddleware")
const {
    signupController,
    loginController,
    logoutController,
    readProfileController,
    updateProfileController,
    deleteProfileController,
    upload,
    uploadAvatarController,
    deleteAvatarController,
    readAvatarController
} = require("../controllers/usersController")


// signup Router
router.post("/api/users", signupController)
// login Router
router.post("/api/users/login", loginController)
// logout Router 
router.post("/api/users/logout", protect, logoutController)
// read profile router
router.get("/api/users/me", protect, readProfileController)
// update profile router
router.patch("/api/users/me", protect, updateProfileController)
// delete user router
router.delete("/api/users/me", protect, deleteProfileController)
// upload avatar router
router.post("/api/users/me/avatar", protect, upload.single("avatar"), uploadAvatarController, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})
// delete avatar router 
router.delete("/api/users/me/avatar", protect, deleteAvatarController)
// get avatar router
router.get("/api/users/:id/avatar", protect, readAvatarController)









module.exports = router
const express = require('express')
const path = require('path')
const multer = require('multer')
const fileController = require('../controller/fileController')
const uploadPath = path.join(__dirname, '..', 'Public', 'uploads')

const storage = multer.diskStorage({
        destination: (req, file, cb) => {
                cb(null, uploadPath)
        },

        filename: (req, file, cb) => {
            const fileExtension = file.originalname.split('.').pop()
            let allowExt = ['jpeg', 'jpg', 'png', 'gif']
            if(!allowExt.includes(fileExtension)){
                    cb('Invalid File Type')
                }else{
                        let fnameExt = allowExt.filter(ext => ext.toLowerCase() ===fileExtension).pop().toLowerCase()
                        let fname = (fnameExt === 'jpeg' || fnameExt === 'jpg' ? 'JPG' : fnameExt === 'pgn'? 'PNG' : 'GIF');
                        let partFilename = `${fname}_${Date.now().toString()}`
                        cb(null, `${partFilename}.${fileExtension}`)
                }   
        }
})
const uploads = multer({storage: storage})
const router = express.Router()

router.route('/file-upload')
        .get(fileController.showUpload)
        .post(uploads.single('myFile'), fileController.fileHandller)


module.exports = router
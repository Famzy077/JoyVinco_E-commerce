const File = require('../controller/fileController')
const showUpload = async(req, res) => {
    res.render('fileUpload')
}

const fileHandller = async(req, res) => {
    let protocol = req.protocol,
        host = req.get('host'),
        filename = req.file.filename,
        path = `${protocol}://${host}/uploads/${filename}`
    try {
        await File.create({file : path})
        res.redirect('/file/file-upload')
    } catch (error) {
        res.send(error)
    }

}


module.exports = { showUpload, fileHandller }
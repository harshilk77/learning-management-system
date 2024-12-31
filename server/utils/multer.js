import multer from "./multer"


const upload = multer({
     dest: 'uploads/',
     limits: { fileSize: 1000000 },
     fileFilter: (req, file, cb) => {
         if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
             return cb(new Error('Only image files are allowed!'));
         }
         cb(null, true);
     }
});

export default upload;
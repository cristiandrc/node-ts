import express from 'express' //ESModule

const router = express.Router()

router.get('/',(_req, res)=>{
  res.send('Fetching all entry dairies')
})

router.get('/',(_req, res)=>{
  res.send('Saving a diary')
})

export default router
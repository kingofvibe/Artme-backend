
const router = require('../core/routeConfig')
const comment = require('../service/commentsRoutes')
// check token
const hasToken = require('../core/userAuth')

router.get('/:postId/comments', hasToken,comment.getComment)

router.post('/:postId/comments',hasToken,comment.createComment)

router.patch('/:postId/comments/:commentId',hasToken,comment.updateComment)

router.delete('/:postId/comments/:commentId',hasToken,comment.deleteComment)

module.exports = router
const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
	return blogs.reduce((likes, blog) => likes + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
	if(blogs.length === 0) {
		return null
	}
	return blogs.reduce((mostLiked, current) => {
		return current.likes > mostLiked.likes ? current : mostLiked
	})
}

module.exports = {
  dummy,
	totalLikes,
	favoriteBlog
}
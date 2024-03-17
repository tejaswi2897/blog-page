const ViewBlog = () =>{
    return <>
       <section className="blog-area-view">
            <section className="blog-area-view-text">
            <h2 className="title">title</h2>
            <p className="desc">description</p>
            <p className="author">- author</p>
            <section className="likeDislike">
                <i className="fa fa-2x fa-thumbs-o-up">20</i>
                <i className="fa fa-2x fa-thumbs-o-down">10</i>
            </section>
            </section>
            <img className="image-preview-view" src="./images/banner-1.jpg"  alt="" />
        </section>
    </>
}

export default ViewBlog;
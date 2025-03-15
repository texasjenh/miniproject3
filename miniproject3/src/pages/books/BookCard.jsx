import React from "react";
import { getImgUrl } from "../../hooks/getImgUrl";

export default function BookCard({book})  {
    return (
        <div className="row no-gutter">
        <div className="image-row">
            <div className="card">
                <a href="/">
                    <img
                        src={`${getImgUrl(book.coverImage)}`}
                        alt=""
                        className="card-img-top"
                    />
                </a>
            </div>
        </div>
        </div>
    )
}
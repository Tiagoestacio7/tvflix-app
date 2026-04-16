import React from 'react'

function formatDate(dateString) {
    const [year, month, day] = dateString.split(`-`);
    return `${day}/${month}/${year}`
}

export const Card = ({ title, date, image }) => {
    return (
        <div className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="movie-card">
                <img
                    src={`https://image.tmdb.org/t/p/w500${image}`}
                    className="card-img-top"
                    alt={title}
                />
                <div className="card-body movie-info">
                    <div className="movie-title">{title}</div>
                    <div className="movie-date">{date && formatDate(date)}</div>
                </div>
            </div>
        </div>
    )
}
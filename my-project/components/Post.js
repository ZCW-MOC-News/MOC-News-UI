function Post({ author, content, timestamp }) {
    return (
        <div className="flex-flex-col">
            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
                <div className="flex items-center space-x-2">
                    <div>
                    <p className="font-medium">{author}</p>
                    <p className="text-xs text-gray-400">
                        {new Date(timestamp?.toDate()).toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Post;
import React, { useEffect, useState } from "react";

const FileUpload = () => {
	const [file, setFile] = useState();
	const handlefile = (e) => {
		setFile(e.target.files[0]);
	};
	useEffect(() => {
		document.title = "FileUpload";
	}, []);
	return (
		<div>
			<input type='file' onChange={handlefile} />
			{file && <img src={URL.createObjectURL(file)} />}
		</div>
	);
};

export default FileUpload;

import {useState,useEffect} from "react";
import {paginate} from "./utils";
const url = `https://jsonplaceholder.typicode.com/posts`;
export const useFetch = () => {
	const [loading,setLoading] = useState(true);
	const [data,setData] = useState([]);

	const getPosts = async () => {
		const response = await fetch(url);
		const result = await response.json();
		setData(paginate(result));
		setLoading(false);
	};
	useEffect(() => {
		getPosts();
	},[])
	return {loading,data};
};
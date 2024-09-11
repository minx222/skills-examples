import { useAppSelector } from "@/stores";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
const Home = () => {
	const navigate = useNavigate();

	const count = useAppSelector((state) => state.counter.count);

	return (
		<div className="flex flex-col gap-3 items-center justify-center w-full h-full">
			<div>当前count的值{count}</div>
			<div className="flex gap-4">
				<Button onClick={() => navigate("/about")}>about页面</Button>
				<Button onClick={() => navigate('/context')}>context页面</Button>
			</div>
		</div>
	);
};

export default Home;

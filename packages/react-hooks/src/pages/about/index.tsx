import { Button, Tag, Input } from "antd";

import { useAppDispatch, useAppSelector } from "@/stores";
import { increment, decrement, incrementAsync } from "@/stores/modules/count";

const About = () => {
	const navigate = useNavigate();

	const count = useAppSelector((state) => state.counter.count);
	const dispatch = useAppDispatch();

	const [incrementAmount, setIncrementAmount] = useState(1);

	const backHome = () => {
		navigate("/");
	};

	return (
		<div className="flex flex-col gap-3 items-center p-4">
			<Button onClick={backHome}>返回首页</Button>
			<Tag className="text-xl w-fit">当前count的值为:{count}</Tag>
			<div className="flex gap-3 w-fit">
				<Button onClick={() => dispatch(increment())}>++</Button>
				<Button onClick={() => dispatch(decrement())}>--</Button>
			</div>
			<div className="flex gap-2">
				<Input
					min={1}
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(Number(e.target.value))}
				/>
				<Button onClick={() => dispatch(incrementAsync(incrementAmount))}>
					加
				</Button>
			</div>
		</div>
	);
};

export default About;

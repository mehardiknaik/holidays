import { data } from "../common/data";
import Home from "../components/Home/Home";

const Main = () => {
  console.log(data);
  return (
    <div style={{ margin: "20px" }}>
      <div style={{display:'flex',gap: '20px',flexWrap: 'wrap'}}>
        {data.map((month,i) => (
          <Home key={i} data={month} />
        ))}
      </div>
    </div>
  );
};

export default Main;

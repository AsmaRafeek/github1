import styled from "styled-components";
import FeaturedInfo from "../components/FeaturedInfo";
import Chart from "../components/Chart";
import { userData } from "../../dummyData";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";

const Container = styled.div`
  flex: 4;
`;
const HomeWidgets = styled.div`
  display: flex;
  margin: 20px;
`;

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <HomeWidgets>
        <WidgetSm />
        <WidgetLg />
      </HomeWidgets>
    </Container>
  );
};

export default Home;

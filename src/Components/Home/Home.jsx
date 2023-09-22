import Banner from "../Banner/Banner";
import CatogoryList from "../CategoryList/CatogoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CatogoryList></CatogoryList>
            <FeaturedJobs></FeaturedJobs>
            <h2 className="text-center text-4xl font-bold my-5">This is Home</h2>
        </div>
    );
};

export default Home;
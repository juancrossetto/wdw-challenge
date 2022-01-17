import React, { FC, useState, useEffect } from 'react';
import { POSTS } from '../../assets/dummy';
import Hero from '../../components/HomeSection/Hero';
import InputSearch from '../../components/HomeSection/InputSearch';
import PostCard from '../../components/PostCard';
import Spinner from '../../components/Spinner';
import { DEBOUNCE_FILTER_MILLISECONDS, ITEMS_PER_PAGE } from '../../utils/constants';
import useDebounce from '../../utils/hooks/useDebounce';
import './home.scss';
interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const [filter, setFilter] = useState<string>('');
  const debouncedValue = useDebounce<string>(filter, DEBOUNCE_FILTER_MILLISECONDS);
  const [quantityToShow, setQuantityToShow] = useState<number>(ITEMS_PER_PAGE);
  const [items, setItems] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleShowMore = () => {
    if (quantityToShow + ITEMS_PER_PAGE <= POSTS.length) {
      setQuantityToShow(quantityToShow + ITEMS_PER_PAGE);
    } else {
      setQuantityToShow(POSTS.length);
    }
  };

  useEffect(() => {
    setItems(POSTS.slice(0, quantityToShow));
    // eslint-disable-next-line
  }, [quantityToShow]);

  const onFilter = (value: string) => {
    if (value) {
      setIsLoading(true);
      setTimeout(() => {
        const itemsFiltered = POSTS.filter(
          (p) => p.title.toLowerCase().includes(value.toLowerCase()) || p.hashTag.toLowerCase().includes(value.toLowerCase())
        );
        setItems(itemsFiltered?.slice(0, quantityToShow));
        setIsLoading(false);
      }, 500);
    } else {
      setItems(POSTS.slice(0, quantityToShow));
    }
  };
  useEffect(() => {
    onFilter(debouncedValue);

    // eslint-disable-next-line
  }, [debouncedValue]);
  return (
    <div className="home">
      <Hero />
      <div className="container p-0">
        <div className="home__search-container">
          <p className="home__search-container__text">Search by #</p>
          <div className="home__search-container__input">
            <InputSearch onChange={(e: any) => setFilter(e.target.value)} />
          </div>
        </div>
        {/* <div className="row"> */}
        <div className="home__posts">
          {items && items.length ? (
            items.map((post: IPost, index: number) => (
              <div className="home__posts__post" key={index}>
                <PostCard post={post} />
              </div>
            ))
          ) : (
            <h1 className="home__posts__post__not">No post found</h1>
          )}
        </div>
        {/* </div> */}
        {!debouncedValue && (
          <div className="home__search-container__load">
            {quantityToShow !== POSTS.length ? (
              <p className="home__search-container__load__text scroll" onClick={handleShowMore}>
                Load More
              </p>
            ) : (
              <p className="home__search-container__load__text scroll" onClick={() => setQuantityToShow(ITEMS_PER_PAGE)}>
                Show Less
              </p>
            )}
          </div>
        )}
      </div>
      {isLoading && <Spinner />}
    </div>
  );
};

export default HomePage;

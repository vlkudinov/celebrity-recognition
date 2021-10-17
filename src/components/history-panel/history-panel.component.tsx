import React, { useEffect } from 'react';
import { HistoryImage, RootState } from 'src/model';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useDispatch, useSelector } from 'react-redux';
import { ImageListItemBar, ListSubheader } from '@mui/material';
import { getHistoryStart } from 'src/redux/history/history.reducer';
import { getImageFromHistory } from 'src/redux/image/image.reducer';
import { selectImageList } from 'src/redux/history/history.selectors';
import {
  VerticalButton, ButtonPanel, HistoryPanelContainer, HistoryPanelDrawer,
} from './history-panel.styles';

const HistoryPanel = () => {
  const dispatch = useDispatch();
  const imageUrl = useSelector(({ image }: RootState) => image.imageUrl);
  const imageList = useSelector(selectImageList);
  const [drawerIsOpened, setDrawerToggle] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerToggle((prevState) => !prevState);
  };

  const handleClick = (image : HistoryImage) => {
    if (imageUrl !== image.link) {
      dispatch(getImageFromHistory(image));
    }
  };

  useEffect(() => {
    dispatch(getHistoryStart());
  }, [dispatch]);

  return (
    <HistoryPanelContainer item hidden={!imageList.length}>
      <ButtonPanel>
        <VerticalButton onClick={toggleDrawer} fullWidth variant="text" sx={{ color: '#fff' }}>HISTORY</VerticalButton>
      </ButtonPanel>
      <HistoryPanelDrawer
        anchor="left"
        open={drawerIsOpened}
        onClose={toggleDrawer}
      >
        <ImageList cols={1} sx={{ width: 200, margin: 0 }} gap={1}>
          <ImageListItem key="Subheader" cols={1}>
            <ListSubheader component="div">HISTORY</ListSubheader>
          </ImageListItem>
          {imageList.map((image) => (
            <ImageListItem
              key={image.id}
              sx={{ height: '250px !important', cursor: 'pointer' }}
              onClick={() => handleClick(image)}
            >
              <img
                style={{ overflow: 'hidden' }}
                src={image.link}
                alt={image.name}
                loading="lazy"
              />
              <ImageListItemBar
                title={image.name.toUpperCase()}
                subtitle={new Date(image.created_at).toLocaleString()}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </HistoryPanelDrawer>
    </HistoryPanelContainer>
  );
};

export default HistoryPanel;

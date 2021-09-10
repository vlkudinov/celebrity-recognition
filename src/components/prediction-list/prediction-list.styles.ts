import styled from '@emotion/styled';

export const PredictionListContainer = styled.ul({
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflowY: 'scroll',
  '& ::-webkit-scrollbar': {
    WebkitAppearance: 'none',
    width: 122,

  },
  '& ::-webkit-scrollbar:vertical': {
    width: 122,
  },
  '& ::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    border: '2px solid white',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
});

// .frame::-webkit-scrollbar:vertical {
//   width: 11px;
// }
//
// .frame::-webkit-scrollbar:horizontal {
//   height: 11px;
// }
//
// .frame::-webkit-scrollbar-thumb {
//   border-radius: 8px;
//   border: 2px solid white; /* should match background, can't be transparent */
//   background-color: rgba(0, 0, 0, .5);
// }
//
// .frame::-webkit-scrollbar-track {
//   background-color: #fff;
//   border-radius: 8px;
// }

export const PredictionListItem = styled.li(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: theme.palette.grey['500'],
  borderBottom: `1px solid ${theme.palette.grey['200']}`,
  padding: '4px 0px',
  fontSize: '0.8em',
}));

export const PredictionListName = styled.span({
  textTransform: 'uppercase',
});

export const PredictionListValue = styled.span(({ theme }) => ({
  color: 'inherit',
}));

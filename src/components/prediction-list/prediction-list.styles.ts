import styled from '@emotion/styled';

export const PredictionListContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginTop: 20,
});

export const PredictionListStyled = styled.ul(({ theme }) => ({
  margin: 0,
  paddingLeft: 10,
  flexGrow: 1,
}));

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

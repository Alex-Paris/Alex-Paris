import { shade } from 'polished';
import styled from 'styled-components';

interface ProvidersContainerProps {
  selected: boolean;
}

interface ScheduleSectionHourProps {
  available: boolean;
  selected: boolean;
}

export const Container = styled.div`
  height: 100%;
  background: #312e38;
  font-weight: 400;
`;

export const Header = styled.header`
  padding: 24px 0;
  padding-top: 40px;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;

  button {
    display: flex;
    margin-left: 0px;
    background: transparent;
    border: 0;
  }

  span {
    margin-left: 16px;
    margin-right: auto;
    color: #f4ede8;
    font-size: 20px;
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-left: 10px;
  }
`;

export const Content = styled.div`
  background: #312e38;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    width: 330px;
    margin: 0 24px;
  }
`;

export const ProvidersListContainer = styled.div`
  height: 100px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  ::-webkit-scrollbar {
    height: 0;
  }
`;

export const ProvidersList = styled.div`
  display: flex;
  padding: 24px 24px;
`;

export const ProvidersContainer = styled.a<ProvidersContainerProps>`
  background: ${(props) => (props.selected ? '#ff9000' : '#3e3b47')};

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 10px;

  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    border-radius: 16px;
  }

  strong {
    color: ${(props) => (props.selected ? '#232129' : '#f4ede8')};
    font-size: 16px;
    margin-left: 8px;
  }
`;

export const Calendar = styled.div`
  strong {
    display: flex;
    color: #f4ede8;
    font-size: 24px;
    margin: 0 24px 10px;
  }

  > div {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    width: 375px;
    height: 667px;
    right: 27px;
    bottom: 67px;
    border-radius: 45px;
    border: 0;
    background-color: rgba(0, 0, 0, 0.5);

    .DayPicker {
      background: #28262e;
      border-radius: 10px;
      margin: 10px;
      height: 400px;
    }
    .DayPicker-wrapper {
      padding-bottom: 0;
    }
    .DayPicker,
    .DayPicker-Month {
    }

    .DayPicker-Month {
      border-collapse: separate;
      border-spacing: 8px;
      margin: 16px;
    }
    .DayPicker-Day {
      width: 40px;
      height: 40px;
    }
    .DayPicker-Day--available:not(.DayPicker-Day--outside) {
      background: #3e3b47;
      border-radius: 10px;
      color: #fff;
    }
    .DayPicker:not(.DayPicker--interactionDisabled)
      .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
      background: ${shade(0.2, '#3e3b47')};
    }
    .DayPicker-Day--today {
      font-weight: normal;
    }
    .DayPicker-Day--disabled {
      color: #666360 !important;
      background: transparent !important;
    }
    .DayPicker-Day--selected {
      background: #ff9000 !important;
      border-radius: 10px;
      color: #232129 !important;
    }
  }
`;

export const Schedule = styled.div`
  padding: 24px 0 10px;

  strong {
    display: flex;
    color: #f4ede8;
    font-size: 24px;
    margin: 0 24px 10px;
  }
`;

export const ScheduleSection = styled.div`
  margin-bottom: 24px;

  strong {
    display: flex;
    color: #999591;
    font-size: 18px;
    margin: 0 24px 12px;
  }
`;

export const ScheduleSectionContent = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  ::-webkit-scrollbar {
    height: 0;
  }
`;

export const ScheduleSectionList = styled.div`
  display: flex;
  padding: 0 24px 0 24px;
`;

export const ScheduleSectionHour = styled.a<ScheduleSectionHourProps>`
  display: flex;
  padding: 12px;
  background: ${(props) => (props.selected ? '#ff9000' : '#3e3b47')};
  border-radius: 10px;
  margin-right: 8px;
  opacity: ${(props) => (props.available ? 1 : 0.3)};

  cursor: pointer;

  p {
    color: ${(props) => (props.selected ? '#232129' : '#f4ede8')};
    font-size: 16px;
  }
`;

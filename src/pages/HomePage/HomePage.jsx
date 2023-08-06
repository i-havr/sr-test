import { useWindowWidth } from '../../hooks';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { OptionsPanel } from '../../components/OptionsPanel';
import { EventsList } from '../../components/EventsList';
import * as SC from './HomePage.styled';

export default function HomePage() {
  const { isScreenMobile, isScreenTablet, isScreenDesktop } = useWindowWidth();

  return (
    <SC.Home>
      <Section>
        <Container>
          {isScreenMobile && <OptionsPanel />}

          {isScreenTablet && (
            <SC.OptionsWrapper>
              <OptionsPanel />
              <SC.Title>My events</SC.Title>
            </SC.OptionsWrapper>
          )}

          {isScreenDesktop && (
            <SC.OptionsWrapper>
              <OptionsPanel />
              <SC.Title>My events</SC.Title>
            </SC.OptionsWrapper>
          )}

          <EventsList />
        </Container>
      </Section>
    </SC.Home>
  );
}

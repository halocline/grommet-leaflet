import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  Heading,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
} from 'grommet';
import { ContentContainer } from '../components';
import { Github, LinkNext } from 'grommet-icons';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const pages = [
  {
    title: 'Default pins and cluster',
    description: 'Demo of the default pin and cluster styling and behavior.',
    href: '/default',
  },
  {
    title: 'Devices',
    description: 'Demo of device health.',
    href: '/devices',
  },
  {
    title: 'Servers',
    description: 'Demo of server health.',
    href: '/servers',
  },
  {
    title: 'Network',
    description: 'Demo of network health.',
    href: '/network',
  },

  {
    title: 'Custom pin kinds',
    description:
      'Demo of custom pin kinds such as restaurants, retail, hospitals, etc.',
    href: '/generic-kinds',
  },
];

const Index = () => {
  return (
    <Page fill>
      <PageContent flex>
        <PageHeader
          title="Acme, Inc."
          subtitle="A demo app for grommet-leaflet-core features and examples."
          actions={
            <Button
              label="View in Github"
              icon={<Github />}
              href="https://github.com/grommet/grommet-leaflet"
              target="_blank"
              rel="noreferrer noopener"
            />
          }
        />
        <ContentContainer>
          <Grid columns="medium" gap="medium">
            {pages.map(page => (
              <StyledLink to={page.href} key={page.title}>
                <Card fill>
                  <CardBody gap="small">
                    <Box gap="xsmall">
                      <Heading level={2} margin="none">
                        {page.title}
                      </Heading>
                      <Paragraph margin="none">{page.description}</Paragraph>
                    </Box>
                    <LinkNext color="brand" />
                  </CardBody>
                </Card>
              </StyledLink>
            ))}
          </Grid>
        </ContentContainer>
      </PageContent>
    </Page>
  );
};

export default Index;

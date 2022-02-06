import * as React from "react";
import "@react95/icons/icons.css";
import PageTitle from "../components/PageTitle";
import Layout from "../components/layout";
import { ThemeProvider} from 'styled-components';
import original from "react95/dist/themes/original";

import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableHeadCell,
  TableDataCell,
  Window,
  WindowHeader,
  WindowContent
} from 'react95';

// markup
const EducationPage = () => {
  return (
    <Layout>
      <div>
      <ThemeProvider theme={original}>
        <Window data-hide="me" style={{ width: "100%" }}>
          <WindowHeader>Dale Palmer Jr - Education</WindowHeader>
          <WindowContent>
            <Table>
              <TableHead>
                <TableRow head>
                  <TableHeadCell>Type</TableHeadCell>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Degree</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableDataCell style={{ textAlign: 'center' }}>
                    <span role='img' aria-label='LEAF'>
                      🌿
                    </span>
                  </TableDataCell>
                  <TableDataCell>University of Akron</TableDataCell>
                  <TableDataCell>BA of The Arts, Psychology</TableDataCell>
                </TableRow>
                <TableRow>
                  <TableDataCell style={{ textAlign: 'center' }}>
                    <span role='img' aria-label='fire'>
                      🔥
                    </span>
                  </TableDataCell>
                  <TableDataCell>Epicodus</TableDataCell>
                  <TableDataCell>Bootcamp Certificate</TableDataCell>
                </TableRow>
              </TableBody>
            </Table>
          </WindowContent>
        </Window>
        </ThemeProvider>
      </div>
    </Layout>
  );
};

export default EducationPage;

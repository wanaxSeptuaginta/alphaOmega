"use client";

import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { lemmaState } from "../atoms/lemma";
import {
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRoot,
  TableRow,
  TableRowHeaderCell,
} from "@radix-ui/themes";

const DisplayLemma = () => {
  const [lemma, setLemma] = useRecoilState(lemmaState);

  console.log(lemma);

  if (lemma.find((l) => l === "")) return null;

  if (lemma)
    return (
      <RecoilRoot>
        {lemma.find((l) => l !== "") && (
          <TableRoot>
            <TableHeader>
              <TableRow>
                <TableColumnHeaderCell>
                  Dictionary inforamation:
                </TableColumnHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableRowHeaderCell>Entry:</TableRowHeaderCell>
                <TableCell>{lemma[0]}</TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>English Translation:</TableRowHeaderCell>
                <TableCell>{lemma[1]}</TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Text Form:</TableRowHeaderCell>
                <TableCell>{lemma[2]}</TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  Grammatical Information:
                </TableRowHeaderCell>
                <TableCell>{lemma[3]}</TableCell>
              </TableRow>
            </TableBody>
          </TableRoot>
        )}
      </RecoilRoot>
    );
};

export default DisplayLemma;

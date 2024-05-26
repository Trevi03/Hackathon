import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ArrowDown as ArrowDownIcon } from '@phosphor-icons/react/dist/ssr/ArrowDown';
import { ArrowUp as ArrowUpIcon } from '@phosphor-icons/react/dist/ssr/ArrowUp';
import { CurrencyDollar as CurrencyDollarIcon } from '@phosphor-icons/react/dist/ssr/CurrencyDollar';
import { Crosshair as CrosshairIcon } from '@phosphor-icons/react/dist/ssr/Crosshair';
import { PhonePlus } from '@phosphor-icons/react/dist/ssr';

export interface WelcomeProps {
  sx?: SxProps;
}

// Use this as popular games boxes
export function Welcome({ sx}: WelcomeProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={3}>
        <img src={'/assets/athena.jpg'} alt="Your Image" style={{ width: '100%', borderRadius: '8px' }} />
        </Stack>
      </CardContent>
    </Card>
  );
}
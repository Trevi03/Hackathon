import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import type { SxProps } from '@mui/material/styles';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { DotsThreeVertical as DotsThreeVerticalIcon } from '@phosphor-icons/react/dist/ssr/DotsThreeVertical';
import dayjs from 'dayjs';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export interface LatestProductsProps {
  sx?: SxProps;
  text: string;
  topmarg: number;
}

export function LatestProducts({ sx, text }: LatestProductsProps): React.JSX.Element {
  return (
    <Stack sx={{ outline: 'none', ...sx }} spacing={1} marginTop={4} marginBottom={1}> {/* Add spacing */}
      <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3}> {/* Adjusted alignment */}
          <Stack spacing={1}>
            <Typography variant="h4">{text}</Typography>
          </Stack>
          <span>see more &gt;&gt;</span> {/* You can use a span for the "see more" text */}
        </Stack>
      </Stack>
    </Stack>
  );
}

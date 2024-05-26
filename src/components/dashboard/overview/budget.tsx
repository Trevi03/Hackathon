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

export interface BudgetProps {
  sx?: SxProps;
  session: string;
  game: string;
  level: string;
  // femalefriendly: string;
  playernum: string;
  members: string;
  imageUrl: string;
}

// Use this as join session boxes
export function Budget({ sx, session, game, level, playernum, members, imageUrl}: BudgetProps): React.JSX.Element {

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={3}>
        <img src={imageUrl} alt="Game Image" style={{ width: '100%', borderRadius: '8px' }} />
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
            <Typography variant="h4">{session}</Typography>
              <Typography color="text.secondary" variant="overline">
                <b>{"Game: "}</b> {game}<br />
                {/* <b>{"Female Friendly Score: "}</b>{femalefriendly}   */}
              </Typography>
            </Stack>
            <Avatar sx={{ backgroundColor: 'var(--mui-palette-primary-main)', height: '56px', width: '56px' }}>
              <PhonePlus fontSize="var(--icon-fontSize-lg)" />
            </Avatar>
          </Stack>
            <Stack sx={{ alignItems: 'center', justifyContent: 'space-between' }} direction="row" spacing={2}>
              <Stack sx={{ alignItems: 'center'}} direction="row" spacing={0.5}>
                {"Players needed: "}{playernum} <br />
                {"Level: "}{level} <br />
              </Stack>
              <Typography sx={{ textAlign: 'right' }}color="text.secondary" variant="caption">
                {members}{" Members"}
              </Typography>
            </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

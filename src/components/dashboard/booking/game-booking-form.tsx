'use client';

import * as React from 'react';
import { useState, ChangeEvent, FormEvent } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/de';
import { TextFieldProps } from '@mui/material/TextField';

const availableGames = [
  'Counter Strike 2',
  'League of Legends',
  'Stardew Valley',
  'Elden Ring',
  'Grand Theft Auto',
];

const availablePlayers = [
  'Miri',
  'Brave Anne',
  'Marie Laval'
];

export function GameSessionForm(): React.JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [game, setGame] = useState<string>('');
  const [players, setPlayers] = useState<string[]>([]);
  const [dateTime, setDateTime] = useState<Date | null>(null);

  const initialFormState = {
    title: '',
    game: '',
    players: [],
    dateTime: null
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, title: event.target.value });
    setTitle(event.target.value);
  };

  const handleGameChange = (event: SelectChangeEvent<string>) => {
    setFormData({ ...formData, game: event.target.value });
    setGame(event.target.value);
  };

  const handlePlayersChange = (event: SelectChangeEvent<string[]>) => {
    setFormData({ ...formData, players: event.target.value });
    setPlayers(event.target.value);
  };

  const handleDateTimeChange = (newValue: Date | null) => {
    setFormData({ ...formData, dateTime: newValue });
    setDateTime(newValue);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form Submitted', formData);
    // Handle form submission logic here
    setFormData(initialFormState)
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="Fill in the details to create a game session" title="Create Game Session" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Title</InputLabel>
                <OutlinedInput
                  value={title}
                  onChange={handleTitleChange}
                  label="Title"
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Select Game</InputLabel>
                <Select
                  value={game}
                  onChange={handleGameChange}
                  label="Select Game"
                >
                  {availableGames.map((game) => (
                    <MenuItem key={game} value={game}>
                      {game}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Players</InputLabel>
                  <Select
                    multiple
                    value={players}
                    onChange={handlePlayersChange}
                    label="Players"
                  >
                    {availablePlayers.map((player) => (
                      <MenuItem key={player} value={player}>
                        {player}
                      </MenuItem>
                    ))}
                  />
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth required>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                  <DateTimePicker
                    renderInput={(props) => (
                      <TextField {...props} />
                    )}
                    label="Date & Time"
                    value={dateTime}
                    onChange={handleDateTimeChange}
                  />
                </LocalizationProvider>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button type="submit" variant="contained">Create Session</Button>
        </CardActions>
      </Card>
    </form>
  );
}
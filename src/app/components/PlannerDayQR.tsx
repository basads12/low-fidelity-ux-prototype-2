import { useState, useEffect } from 'react';
import { Screen } from '../App';

interface PlannerDayQRProps {
  onNavigate: (screen: Screen) => void;
  updateData: (data: any) => void;
  userData: any;
}

type Weekday = 'maandag' | 'vrijdag' | 'zaterdag';

interface DateOption {
  date: string;
  dayName: string;
  dayNumber: string;
  month: string;
  display: string;
  weekday: Weekday;
  times: string[];
}

export function PlannerDayQR({ onNavigate, updateData, userData }: PlannerDayQRProps) {
  const [selectedWeekday, setSelectedWeekday] = useState<Weekday>('maandag');
  const [selectedDate, setSelectedDate] = useState(userData.selectedDay || '');
  const [selectedTime, setSelectedTime] = useState(userData.selectedTime || '');

  // Tijdsloten per kwartier
  const maandagTimes = ['14:00', '14:15', '14:30', '14:45', '15:00', '15:15', '15:30', '15:45', '16:00', '16:15', '16:30', '16:45', '17:00', '17:15', '17:30', '17:45', '18:00', '18:15', '18:30', '18:45'];
  const vrijdagTimes = ['12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '14:45', '15:00', '15:15', '15:30', '15:45', '16:00', '16:15'];
  const zaterdagTimes = ['10:30', '10:45', '11:00', '11:15', '11:30', '11:45', '12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '14:45', '15:00', '15:15', '15:30', '15:45', '16:00', '16:15'];

  // Datums vanaf 25 april 2026 + 3 maanden
  const availableDates: DateOption[] = [
    // Maandagen (14:00-18:45)
    { date: '2026-04-27', dayName: 'MA', dayNumber: '27', month: 'apr', display: 'Maandag 27 april 2026', weekday: 'maandag', times: maandagTimes },
    { date: '2026-05-04', dayName: 'MA', dayNumber: '04', month: 'mei', display: 'Maandag 4 mei 2026', weekday: 'maandag', times: maandagTimes },
    { date: '2026-05-11', dayName: 'MA', dayNumber: '11', month: 'mei', display: 'Maandag 11 mei 2026', weekday: 'maandag', times: maandagTimes },
    { date: '2026-05-18', dayName: 'MA', dayNumber: '18', month: 'mei', display: 'Maandag 18 mei 2026', weekday: 'maandag', times: maandagTimes },
    { date: '2026-05-25', dayName: 'MA', dayNumber: '25', month: 'mei', display: 'Maandag 25 mei 2026', weekday: 'maandag', times: maandagTimes },
    { date: '2026-06-01', dayName: 'MA', dayNumber: '01', month: 'jun', display: 'Maandag 1 juni 2026', weekday: 'maandag', times: maandagTimes },
    { date: '2026-06-08', dayName: 'MA', dayNumber: '08', month: 'jun', display: 'Maandag 8 juni 2026', weekday: 'maandag', times: maandagTimes },
    { date: '2026-06-15', dayName: 'MA', dayNumber: '15', month: 'jun', display: 'Maandag 15 juni 2026', weekday: 'maandag', times: maandagTimes },
    { date: '2026-06-22', dayName: 'MA', dayNumber: '22', month: 'jun', display: 'Maandag 22 juni 2026', weekday: 'maandag', times: maandagTimes },
    { date: '2026-06-29', dayName: 'MA', dayNumber: '29', month: 'jun', display: 'Maandag 29 juni 2026', weekday: 'maandag', times: maandagTimes },
    { date: '2026-07-06', dayName: 'MA', dayNumber: '06', month: 'jul', display: 'Maandag 6 juli 2026', weekday: 'maandag', times: maandagTimes },
    { date: '2026-07-13', dayName: 'MA', dayNumber: '13', month: 'jul', display: 'Maandag 13 juli 2026', weekday: 'maandag', times: maandagTimes },
    { date: '2026-07-20', dayName: 'MA', dayNumber: '20', month: 'jul', display: 'Maandag 20 juli 2026', weekday: 'maandag', times: maandagTimes },
    { date: '2026-07-27', dayName: 'MA', dayNumber: '27', month: 'jul', display: 'Maandag 27 juli 2026', weekday: 'maandag', times: maandagTimes },
    // Vrijdagen (12:00-16:15)
    { date: '2026-05-01', dayName: 'VR', dayNumber: '01', month: 'mei', display: 'Vrijdag 1 mei 2026', weekday: 'vrijdag', times: vrijdagTimes },
    { date: '2026-05-08', dayName: 'VR', dayNumber: '08', month: 'mei', display: 'Vrijdag 8 mei 2026', weekday: 'vrijdag', times: vrijdagTimes },
    { date: '2026-05-15', dayName: 'VR', dayNumber: '15', month: 'mei', display: 'Vrijdag 15 mei 2026', weekday: 'vrijdag', times: vrijdagTimes },
    { date: '2026-05-22', dayName: 'VR', dayNumber: '22', month: 'mei', display: 'Vrijdag 22 mei 2026', weekday: 'vrijdag', times: vrijdagTimes },
    { date: '2026-05-29', dayName: 'VR', dayNumber: '29', month: 'mei', display: 'Vrijdag 29 mei 2026', weekday: 'vrijdag', times: vrijdagTimes },
    { date: '2026-06-05', dayName: 'VR', dayNumber: '05', month: 'jun', display: 'Vrijdag 5 juni 2026', weekday: 'vrijdag', times: vrijdagTimes },
    { date: '2026-06-12', dayName: 'VR', dayNumber: '12', month: 'jun', display: 'Vrijdag 12 juni 2026', weekday: 'vrijdag', times: vrijdagTimes },
    { date: '2026-06-19', dayName: 'VR', dayNumber: '19', month: 'jun', display: 'Vrijdag 19 juni 2026', weekday: 'vrijdag', times: vrijdagTimes },
    { date: '2026-06-26', dayName: 'VR', dayNumber: '26', month: 'jun', display: 'Vrijdag 26 juni 2026', weekday: 'vrijdag', times: vrijdagTimes },
    { date: '2026-07-03', dayName: 'VR', dayNumber: '03', month: 'jul', display: 'Vrijdag 3 juli 2026', weekday: 'vrijdag', times: vrijdagTimes },
    { date: '2026-07-10', dayName: 'VR', dayNumber: '10', month: 'jul', display: 'Vrijdag 10 juli 2026', weekday: 'vrijdag', times: vrijdagTimes },
    { date: '2026-07-17', dayName: 'VR', dayNumber: '17', month: 'jul', display: 'Vrijdag 17 juli 2026', weekday: 'vrijdag', times: vrijdagTimes },
    { date: '2026-07-24', dayName: 'VR', dayNumber: '24', month: 'jul', display: 'Vrijdag 24 juli 2026', weekday: 'vrijdag', times: vrijdagTimes },
    { date: '2026-07-31', dayName: 'VR', dayNumber: '31', month: 'jul', display: 'Vrijdag 31 juli 2026', weekday: 'vrijdag', times: vrijdagTimes },
    // Zaterdagen (10:30-16:15)
    { date: '2026-05-02', dayName: 'ZA', dayNumber: '02', month: 'mei', display: 'Zaterdag 2 mei 2026', weekday: 'zaterdag', times: zaterdagTimes },
    { date: '2026-05-09', dayName: 'ZA', dayNumber: '09', month: 'mei', display: 'Zaterdag 9 mei 2026', weekday: 'zaterdag', times: zaterdagTimes },
    { date: '2026-05-16', dayName: 'ZA', dayNumber: '16', month: 'mei', display: 'Zaterdag 16 mei 2026', weekday: 'zaterdag', times: zaterdagTimes },
    { date: '2026-05-23', dayName: 'ZA', dayNumber: '23', month: 'mei', display: 'Zaterdag 23 mei 2026', weekday: 'zaterdag', times: zaterdagTimes },
    { date: '2026-05-30', dayName: 'ZA', dayNumber: '30', month: 'mei', display: 'Zaterdag 30 mei 2026', weekday: 'zaterdag', times: zaterdagTimes },
    { date: '2026-06-06', dayName: 'ZA', dayNumber: '06', month: 'jun', display: 'Zaterdag 6 juni 2026', weekday: 'zaterdag', times: zaterdagTimes },
    { date: '2026-06-13', dayName: 'ZA', dayNumber: '13', month: 'jun', display: 'Zaterdag 13 juni 2026', weekday: 'zaterdag', times: zaterdagTimes },
    { date: '2026-06-20', dayName: 'ZA', dayNumber: '20', month: 'jun', display: 'Zaterdag 20 juni 2026', weekday: 'zaterdag', times: zaterdagTimes },
    { date: '2026-06-27', dayName: 'ZA', dayNumber: '27', month: 'jun', display: 'Zaterdag 27 juni 2026', weekday: 'zaterdag', times: zaterdagTimes },
    { date: '2026-07-04', dayName: 'ZA', dayNumber: '04', month: 'jul', display: 'Zaterdag 4 juli 2026', weekday: 'zaterdag', times: zaterdagTimes },
    { date: '2026-07-11', dayName: 'ZA', dayNumber: '11', month: 'jul', display: 'Zaterdag 11 juli 2026', weekday: 'zaterdag', times: zaterdagTimes },
    { date: '2026-07-18', dayName: 'ZA', dayNumber: '18', month: 'jul', display: 'Zaterdag 18 juli 2026', weekday: 'zaterdag', times: zaterdagTimes },
    { date: '2026-07-25', dayName: 'ZA', dayNumber: '25', month: 'jul', display: 'Zaterdag 25 juli 2026', weekday: 'zaterdag', times: zaterdagTimes },
  ];

  const weekdayExtras = {
    maandag: [
      'Autowasbeurt bij The Wash Carwash',
      'Wellness bij Saré Thermen & Beauty',
      'Kleine attentie in de galerie'
    ],
    vrijdag: [
      'Koffie of thee met gebak bij Lust Bakerij & Bistro',
      'Autowasbeurt bij The Wash Carwash'
    ],
    zaterdag: [
      'Koffie of thee met gebak bij Lust Bakerij & Bistro'
    ]
  };

  const filteredDates = availableDates.filter(d => d.weekday === selectedWeekday);
  const selectedDateObj = availableDates.find(d => d.display === selectedDate);
  const availableTimes = selectedDateObj?.times || [];

  // Initialize weekday from preselected date
  useEffect(() => {
    if (userData.selectedDay && !selectedDate) {
      const preselectedDate = availableDates.find(d => d.display === userData.selectedDay);
      if (preselectedDate) {
        setSelectedWeekday(preselectedDate.weekday);
        setSelectedDate(preselectedDate.display);
      }
    }
  }, [userData.selectedDay]);

  // Auto-select first date when weekday changes
  useEffect(() => {
    const firstDate = filteredDates[0];
    if (firstDate && selectedDate !== firstDate.display && !userData.selectedDay) {
      setSelectedDate(firstDate.display);
      setSelectedTime('');
    }
  }, [selectedWeekday]);

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      updateData({
        selectedDay: selectedDate,
        selectedTime: selectedTime,
        availableTimes: availableTimes,
        dayExtras: weekdayExtras[selectedWeekday]
      });
      onNavigate('planner-details-qr');
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Screen Title - Internal */}
      <div style={{ backgroundColor: 'var(--brand-ink)', color: 'white' }} className="py-2 px-4 text-xs font-mono">
        SCHERM: PLANNER STAP 1 - DAG KIEZEN (single screen layout)
      </div>

      {/* Main Content Container */}
      <div className="site-container-narrow py-8 md:py-12">

        <h1 className="text-3xl md:text-4xl font-medium mb-6 md:mb-8" style={{ color: 'var(--text)' }}>
          Kies uw bezoekdag
        </h1>

        {/* Weekday Selector Buttons */}
        <div className="space-y-3 mb-8">
          <button
            onClick={() => setSelectedWeekday('maandag')}
            className="w-full px-6 py-4 text-left font-medium transition-all"
            style={{
              backgroundColor: selectedWeekday === 'maandag' ? 'var(--primary)' : 'var(--muted)',
              color: selectedWeekday === 'maandag' ? 'white' : 'var(--text)',
              borderRadius: '8px'
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg tracking-wide">MAANDAG</span>
              <span className="text-sm opacity-80">Dagkeuze</span>
            </div>
          </button>

          <button
            onClick={() => setSelectedWeekday('vrijdag')}
            className="w-full px-6 py-4 text-left font-medium transition-all"
            style={{
              backgroundColor: selectedWeekday === 'vrijdag' ? 'var(--primary)' : 'var(--muted)',
              color: selectedWeekday === 'vrijdag' ? 'white' : 'var(--text)',
              borderRadius: '8px'
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg tracking-wide">VRIJDAG</span>
              <span className="text-sm opacity-80">Dagkeuze</span>
            </div>
          </button>

          <button
            onClick={() => setSelectedWeekday('zaterdag')}
            className="w-full px-6 py-4 text-left font-medium transition-all"
            style={{
              backgroundColor: selectedWeekday === 'zaterdag' ? 'var(--primary)' : 'var(--muted)',
              color: selectedWeekday === 'zaterdag' ? 'white' : 'var(--text)',
              borderRadius: '8px'
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg tracking-wide">ZATERDAG</span>
              <span className="text-sm opacity-80">Dagkeuze</span>
            </div>
          </button>
        </div>

        {/* Inbegrepen tijdens uw bezoek */}
        <div className="mb-8 p-6 card border" style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          borderRadius: '12px'
        }}>
          <h3 className="font-medium text-lg mb-4" style={{ color: 'var(--text)' }}>
            Bij uw bezoek op deze dag inbegrepen
          </h3>
          <ul className="space-y-3">
            {weekdayExtras[selectedWeekday].map((extra, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-lg" style={{ color: 'var(--accent)' }}>✓</span>
                <span style={{ color: 'var(--text)' }}>{extra}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm mt-4" style={{ color: 'var(--text-muted)' }}>
            De praktische gegevens staan in uw bevestiging
          </p>
        </div>

        {/* Gekozen dag summary */}
        <div className="mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <div className="flex items-center gap-2 flex-wrap">
            <span>Gekozen dag:</span>
            <strong style={{ color: 'var(--text)' }}>{selectedWeekday}</strong>
            <span>Met dag-specifieke extras</span>
          </div>
        </div>

        {/* Date Selection */}
        <div className="mb-8">
          <h3 className="font-medium text-lg mb-4" style={{ color: 'var(--text)' }}>
            Kies een datum
          </h3>
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="flex gap-3 pb-2 min-w-max">
              {filteredDates.map((dateOption) => (
                <button
                  key={dateOption.date}
                  onClick={() => {
                    setSelectedDate(dateOption.display);
                    setSelectedTime('');
                  }}
                  className="flex-shrink-0 w-20 p-4 text-center transition-all"
                  style={{
                    backgroundColor: selectedDate === dateOption.display ? 'var(--primary)' : 'var(--muted)',
                    color: selectedDate === dateOption.display ? 'white' : 'var(--text)',
                    borderRadius: '8px'
                  }}
                >
                  <div className="text-xs font-medium mb-1">{dateOption.dayName}</div>
                  <div className="text-2xl font-medium mb-1">{dateOption.dayNumber}</div>
                  <div className="text-xs">{dateOption.month}</div>
                </button>
              ))}
            </div>
          </div>
          <p className="text-xs mt-3 font-mono" style={{ color: 'var(--text-muted)' }}>
            Intern: horizontaal scrollbaar
          </p>
        </div>

        {/* Time Selection */}
        {selectedDate && availableTimes.length > 0 && (
          <div className="mb-8">
            <h3 className="font-medium text-lg mb-4" style={{ color: 'var(--text)' }}>
              Kies een tijd
            </h3>
            <div className="overflow-x-auto -mx-4 px-4">
              <div className="flex gap-3 pb-2 min-w-max">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className="flex-shrink-0 px-6 py-4 text-center transition-all"
                    style={{
                      backgroundColor: selectedTime === time ? 'var(--primary)' : 'var(--muted)',
                      color: selectedTime === time ? 'white' : 'var(--text)',
                      borderRadius: '8px'
                    }}
                  >
                    <div className="font-medium text-lg">{time}</div>
                  </button>
                ))}
              </div>
            </div>
            <p className="text-xs mt-3 font-mono" style={{ color: 'var(--text-muted)' }}>
              Intern: horizontaal scrollbaar
            </p>
            <p className="text-xs mt-2 font-mono" style={{ color: 'var(--text-muted)' }}>
              Intern: tijdpreview in stap 1 is een usability-variant; stap 2 blijft formele tijdkeuze
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="pt-8">
          <button
            onClick={handleContinue}
            disabled={!selectedDate || !selectedTime}
            className={`btn-primary w-full ${
              selectedDate && selectedTime ? '' : 'opacity-40 cursor-not-allowed'
            }`}
          >
            Bevestig keuze
          </button>
          <p className="text-sm mt-3 font-mono text-center" style={{ color: 'var(--text-muted)' }}>
            Intern: Besluit nodig: exacte CTA plannerscherm 1
          </p>
        </div>

        {/* DATA INFO */}
        <p className="text-xs font-mono mt-8" style={{ color: 'var(--text-muted)' }}>
          Datums: vanaf 25 april 2026 + 3 maanden | Tijdsloten per kwartier volgens openingstijden
        </p>

      </div>

      {/* QA Block - Internal */}
      <div className="border-t-4 px-4 sm:px-6 py-8" style={{
        backgroundColor: 'color-mix(in srgb, var(--state-destructive) 10%, var(--background))',
        borderColor: 'var(--destructive)'
      }}>
        <div className="site-container-narrow">
          <h3 className="font-medium text-lg mb-4" style={{ color: 'var(--destructive)' }}>
            QA-BLOK: WAT ABSOLUUT NIET MAG
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--destructive)' }}>
                Verboden bij weekdag/datum/tijd:
              </h4>
              <ul className="space-y-1" style={{ color: 'var(--destructive)' }}>
                <li>✗ "Reserveer maandag/vrijdag/zaterdag"</li>
                <li>✗ Bedragen bij extras</li>
                <li>✗ "Ontvang € XX aan extra cadeaus"</li>
                <li>✗ Badges ("meeste voordeel")</li>
                <li>✗ Statusbalkjes onder datums</li>
                <li>✗ Schaarste-indicatoren</li>
                <li>✗ "Details volgen na reservering"</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--destructive)' }}>
                Verboden taal:
              </h4>
              <ul className="space-y-1" style={{ color: 'var(--destructive)' }}>
                <li>✗ "Ontvang"</li>
                <li>✗ "Extra cadeaus"</li>
                <li>✗ "Meeste voordeel"</li>
                <li>✗ "Belevingspakket"</li>
                <li>✗ "t.w.v." / "ter waarde van"</li>
                <li>✗ "Gratis", "Voordeel", "Korting"</li>
                <li>✗ "Populair", "Snel vol"</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 border-l-4" style={{
            backgroundColor: 'color-mix(in srgb, var(--state-success) 10%, var(--background))',
            borderColor: 'var(--state-success)'
          }}>
            <h4 className="font-medium mb-2" style={{ color: 'var(--state-success)' }}>
              Besluiten genomen:
            </h4>
            <ul className="text-sm space-y-1" style={{ color: 'var(--state-success)' }}>
              <li>✓ Datums: vanaf 25 april 2026 + 3 maanden</li>
              <li>✓ Tijdsloten per kwartier: MA 14:00-18:45, VR 12:00-16:15, ZA 10:30-16:15</li>
              <li>✓ Partnernamen: The Wash Carwash, Lust Bakerij & Bistro, Saré Thermen & Beauty</li>
              <li>✓ Extra's per weekdag: maandag 3x, vrijdag 2x, zaterdag 1x</li>
              <li>✓ CTA plannerscherm 1: "Bevestig keuze"</li>
            </ul>
          </div>

          <div className="mt-6 p-4 border-l-4" style={{
            backgroundColor: 'color-mix(in srgb, var(--state-info) 10%, var(--background))',
            borderColor: 'var(--state-info)'
          }}>
            <h4 className="font-medium mb-2" style={{ color: 'var(--state-info)' }}>
              Belangrijk:
            </h4>
            <p className="text-sm" style={{ color: 'var(--state-info)' }}>
              Single-screen layout: alles op 1 scherm zichtbaar.<br />
              Weekdag knoppen bovenaan, extras direct zichtbaar, geen bedragen.<br />
              Stap 2 blijft formele tijdkeuze waar de gebruiker de tijd kan controleren en wijzigen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

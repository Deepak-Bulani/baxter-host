export const tableHeaders = {
    sections: [
      {
        title: 'Treatment Duration',
        rows: [
          {
            checkbox: {
              id: 'lostTreatmentTime',
              label: 'Lost Treatment Time',
            },
            instruction:
              'Set a flag to be triggered if actual night treatment time is less than the programmed time by the selected flag trigger value.',
            triggers: {
              warning: {
                type: 'dropdown',
                options: ['5', '10', '15', '20', '25', '30'],
                unit: 'minutes',
              },
              critical: {
                type: 'dropdown',
                options: ['5', '10', '15', '20', '25', '30'],
                unit: 'minutes',
              },
            },
          },
        ],
      },
      {
        title: 'Treatment Variances',
        rows: [
          {
            checkbox: {
              id: 'lostDwellTime',
              label: 'Lost Dwell Time',
            },
            instruction:
              'Set a flag to be triggered if actual treatment dwell time is less than the programmed total dwell time by the selected flag trigger value.',
            triggers: {
              warning: {
                type: 'dropdown',
                options: ['5', '10', '15', '20', '25', '30'],
                unit: 'minutes',
              },
              critical: {
                type: 'dropdown',
                options: ['5', '10', '15', '20', '25', '30'],
                unit: 'minutes',
              },
            },
          },
          {
            checkbox: {
              id: 'lostTherapyVolume',
              label: 'Lost Therapy Volume',
            },
            instruction:
              'Set a flag to be triggered if actual therapy volume is less than the programmed total therapy volume by the selected flag trigger value.',
            triggers: {
              warning: {
                type: 'dropdown',
                options: ['5', '10', '15', '20', '25'],
                unit: '%',
              },
              critical: {
                type: 'dropdown',
                options: ['5', '10', '15', '20', '25'],
                unit: '%',
              },
            },
          },
          {
            checkbox: {
              id: 'drainEndedEarly',
              label: 'Drain Ended Early',
            },
            instruction:
              'Set a flag to be triggered when the initial, day, or last drain is bypassed. The flag will appear when the number of bypassed drains is equal to, or greater than, the selected flag trigger value.',
            triggers: {
              warning: {
                type: 'dropdown',
                options: ['1', '2', '3', '4', '5'],
                unit: '',
              },
              critical: {
                type: 'dropdown',
                options: ['1', '2', '3', '4', '5'],
                unit: '',
              },
            },
          },
          {
            checkbox: {
              id: 'initialDrainVariance',
              label: 'Initial Drain Variance',
            },
            instruction:
              'Set a flag to be triggered if actual initial drain volume is different than the programmed minimum initial drain volume by the selected flag trigger value.',
            triggers: {
              warning: {
                type: 'dropdown',
                options: ['5', '10', '15', '20', '25'],
                unit: '%',
              },
              critical: {
                type: 'dropdown',
                options: ['5', '10', '15', '20', '25'],
                unit: '%',
              },
            },
          },
        ],
      },
    ],
  };
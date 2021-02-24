process.env.STAGE = 'jest';
process.env.SCHEDULE_TABLE_NAME = 'schedule-table';

jest
  .useFakeTimers('modern')
  .setSystemTime(new Date('2021-02-18T07:20:00.000Z').getTime());

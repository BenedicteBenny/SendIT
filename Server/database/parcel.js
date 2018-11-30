import pg from 'pg';
const connectionString =  process.env.DATABASE_URL || 'postgres://localhost:5432/send_it';

const parcel = new pg.Parcel(connectionString);
parcel.connect();
const query = parcel.query(
  'CREATE TABLE parcels(id SERIAL PRIMARY KEY, parcelName VARCHAR(40) not null, pickup VARCHAR(40) not null, destination VARCHAR(40) not null, weight INT(40) not null )'
);
query.on('end', () => {
  parcel.end();
});

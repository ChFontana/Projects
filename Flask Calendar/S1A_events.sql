CREATE TABLE events (
  id INTEGER,
  start DATETIME,
  end DATETIME,
  text TEXT NOT NULL,
  color TEXT NOT NULL,
  bg TEXT NOT NULL,
  PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE INDEX idx_start ON events (start);
CREATE INDEX idx_end ON events (end);
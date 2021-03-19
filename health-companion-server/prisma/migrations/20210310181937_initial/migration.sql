-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "MetActivities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "metId" INTEGER NOT NULL,
    "mets" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

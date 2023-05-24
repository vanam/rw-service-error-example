-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME
);

-- CreateTable
CREATE TABLE "Something" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

INSERT INTO "User" ("id", "createdAt", "updatedAt", "email", "hashedPassword", "salt")
VALUES(1, 1684918854925, 1684918854925, "test@example.com", "f8453b972cf9707f1fd1f52e76bed991652b58746455e388a4a2c77db20250ab", "f6722889f7f7ab825bc3e6bda3ac0677");

INSERT INTO "Something" ("id", "createdAt", "updatedAt", "name")
VALUES(1, 1684918854925, 1684918854925, "sth");

/*
  Warnings:

  - You are about to drop the column `verificated` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `verificated`,
    ADD COLUMN `verified` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `passwordHash` VARCHAR(191) NULL;

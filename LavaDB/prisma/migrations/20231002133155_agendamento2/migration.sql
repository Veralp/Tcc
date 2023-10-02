/*
  Warnings:

  - You are about to drop the `disponibilidade` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `horarioInicio` to the `Agendamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horarioTermino` to the `Agendamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agendamento` ADD COLUMN `horarioInicio` DATETIME(3) NOT NULL,
    ADD COLUMN `horarioTermino` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `disponibilidade`;

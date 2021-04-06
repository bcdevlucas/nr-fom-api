import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FspDistrictXref } from './entities/fsp-district-xref.entity';
import { FspDistrictXrefService } from './fsp-district-xref.service';
import {
  FspDistrictXrefController,
  FspDistrictXrefsController,
} from './fsp-district-xref.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FspDistrictXref])],
  controllers: [FspDistrictXrefController, FspDistrictXrefsController],
  providers: [FspDistrictXrefService],
  exports: [],
})
export class FspDistrictXrefModule {}

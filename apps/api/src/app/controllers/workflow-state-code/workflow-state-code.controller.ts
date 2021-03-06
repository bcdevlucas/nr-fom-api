import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CodeTableController } from '@controllers';
import { WorkflowStateCodeService } from './workflow-state-code.service';
import { WorkflowStateCode } from './entities/workflow-state-code.entity';
import { WorkflowStateCodeDto } from './dto/workflow-state-code.dto';
import { UpdateWorkflowStateCodeDto } from './dto/update-workflow-state-code.dto';

@ApiTags('workflow-state-code')
@Controller('workflow-state-code')
export class WorkflowStateCodeController extends CodeTableController<
  WorkflowStateCode,
  WorkflowStateCodeDto,
  UpdateWorkflowStateCodeDto
> {
  constructor(protected readonly service: WorkflowStateCodeService) {
    super(service);
  }

  @Get()
  async findAll() {
    return super.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return super.findOne(id);
  }
}

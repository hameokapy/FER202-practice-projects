import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { DropletFill, BrightnessHighFill, ThermometerHalf, Wind } from 'react-bootstrap-icons';
import { InfoCard } from '../../../components/ui/InfoCard';

const MetricIcons = {
  water: <DropletFill size={28} className="text-primary" />,
  light: <BrightnessHighFill size={28} className="text-warning" />,
  temperature: <ThermometerHalf size={28} className="text-danger" />,
  humidity: <Wind size={28} className="text-info" />
};

export const PlantCareMetrics = ({ metrics }) => {
  return (
    <Row className="g-3">
      {metrics.map((metric) => (
        <Col xs={12} sm={6} key={metric.id}>
          <InfoCard>
            <div className="bg-body rounded p-2 shadow-sm d-flex align-items-center justify-content-center">
              {MetricIcons[metric.type]}
            </div>
            <div>
              <div className="text-muted small fw-medium mb-1">{metric.label}</div>
              <div className="fw-bold">{metric.value}</div>
            </div>
          </InfoCard>
        </Col>
      ))}
    </Row>
  );
};
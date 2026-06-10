import React from 'react';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { usePlantDetail } from '../features/plants/hooks/usePlantDetail';
import { PlantGallery } from '../features/plants/components/PlantGallery';
import { PlantHeader } from '../features/plants/components/PlantHeader';
import { PlantCareMetrics } from '../features/plants/components/PlantCareMetrics';

export const PlantDetailPage = () => {
  const { plant, loading, error } = usePlantDetail('monstera-deliciosa');

  if (loading) {
    return (
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
        <Spinner animation="border" variant="success" className="mb-3" />
        <span className="text-muted fw-medium">Đang tải dữ liệu cây cảnh...</span>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center py-5">
        <h5 className="text-danger">{error}</h5>
      </Container>
    );
  }

  if (!plant) return null;

  return (
    <Container className="py-5">
      {/* Nút Back */}
      <Button variant="link" className="text-decoration-none text-muted d-flex align-items-center gap-2 mb-4 p-0">
        <ArrowLeft /> Quay lại
      </Button>

      {/* Grid Layout */}
      <Row className="gy-4">
        {/* Cột Trái: Ảnh */}
        <Col lg={5}>
          <PlantGallery imageUrl={plant.imageUrl} altText={plant.name} />
        </Col>
        
        {/* Cột Phải: Thông tin chi tiết */}
        <Col lg={7} className="ps-lg-5 d-flex flex-column justify-content-center">
          <PlantHeader 
            name={plant.name}
            scientificName={plant.scientificName}
            difficulty={plant.difficulty}
            tags={plant.tags}
            description={plant.description}
          />
          <div className="mt-4">
            <PlantCareMetrics metrics={plant.metrics} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};